import { IReadContext, ISegment } from "./object-reader";
import { IToken } from "./tokenizer";
import { Helper } from "./helper";
import { FunctionReader, IFunction } from "./function-reader";
import { PropertyReader } from "./property-reader";
import _ = require("lodash");

export interface IFieldsContainer {
  fields: Array<IField>;
  postLabelComments: Array<string>;
  comments: Array<string>;
}

export interface IField {
  comments: string[];
  header: string;
  triggers: Array<IFunction>;
  segments: Array<ISegment>;
  properties: Array<string>;
}

export class FieldsReader {
  static readFields(context: IReadContext): IFieldsContainer {
    const fields: Array<IField> = [];

    let value = context.tokens[context.pos].value.toLocaleLowerCase();
    if (value !== "fields") {
      throw new Error("Invalid fields position");
    }

    context.pos++;

    Helper.readWhiteSpaces(context, []);
    const postLabelComments = Helper.readComments(context);
    Helper.readWhiteSpaces(context, []);
    value = context.tokens[context.pos].value;
    if (value !== "{") {
      throw new Error("Invalid fields position");
    }

    context.pos++;

    const comments = Helper.readComments(context);
    Helper.readWhiteSpaces(context, []);

    value = context.tokens[context.pos].value.toLocaleLowerCase();
    while (value === "field" || value === "modify") {
      const field = this.readField(context);
      fields.push(field);
      value = context.tokens[context.pos].value.toLocaleLowerCase();
    }

    value = context.tokens[context.pos].value;
    if (value !== "}") {
      throw new Error("Invalid fields position");
    }

    context.pos++;
    Helper.readWhiteSpaces(context, []);

    return {
      fields: fields,
      postLabelComments: postLabelComments,
      comments: comments,
    };
  }

  static readField(context: IReadContext): IField {
    const field: IField = {
      header: "",
      triggers: [],
      segments: [],
      comments: [],
      properties: [],
    };

    let header = context.tokens[context.pos].value.toLocaleLowerCase();
    if (header !== "field" && header !== "modify") {
      throw Error(`fields section can have a subsection '${header}'.`);
    }

    context.pos++;
    Helper.readWhiteSpaces(context, []);

    let value = context.tokens[context.pos].value;
    if (value !== "(") {
      throw Error(`field parsing error at ${value}, '(' expected.)`);
    }

    const headerTokens: Array<IToken> = [];
    while (value !== ")") {
      headerTokens.push(context.tokens[context.pos]);
      context.pos++;
      value = context.tokens[context.pos].value;
    }

    if (value !== ")") {
      throw Error(`field parsing error at ${value}, ')' expected.)`);
    }

    headerTokens.push(context.tokens[context.pos]);
    context.pos++;
    field.header = `${header}${Helper.tokensToString(headerTokens, {})}`;

    Helper.readWhiteSpaces(context, []);
    field.comments = Helper.readComments(context);

    value = context.tokens[context.pos].value;
    if (value !== "{") throw new Error("Invalid field position");
    context.pos++;

    let comments: Array<string> = [];

    Helper.readWhiteSpaces(context, []);
    value = context.tokens[context.pos].value;
    while (value !== "}") {
      switch (value) {
        case "trigger":
          field.triggers.push(FunctionReader.readFunction(context, comments));
          comments = [];
          break;
        default:
          if (context.tokens[context.pos].type === "comment") {
            comments.push(context.tokens[context.pos].value);
            context.pos++;
            Helper.readWhiteSpaces(context, []);
          } else {
            comments.forEach((comment) => field.properties.push(comment));
            comments = [];
            field.properties.push(PropertyReader.readProperties(context));
          }
          break;
      }

      value = context.tokens[context.pos].value.toLocaleLowerCase();
    }

    if (value !== "}") throw new Error("Invalid field position");
    context.pos++;

    Helper.readWhiteSpaces(context, []);
    return field;
  }

  static fieldsToString(fields: IFieldsContainer): Array<string> {
    const lines: Array<string> = [];
    const pad = _.padStart("", 4);

    lines.push(`${pad}fields`);
    if (fields.postLabelComments.length > 0) {
      fields.postLabelComments.forEach((line) => lines.push(`${pad}${line}`));
    }
    lines.push(`${pad}{`);
    if (fields.comments.length > 0) {
      fields.comments.forEach((line) => lines.push(`${pad}${line}`));
    }

    fields.fields.forEach((field) => {
      const fieldLines = this.fieldToString(field);
      fieldLines.forEach((line) => lines.push(line));
    });

    lines.push(`${pad}}`);
    return lines;
  }

  static fieldToString(field: IField): Array<string> {
    const lines: Array<string> = [];
    const pad = _.padStart("", 8);
    const pad12 = _.padStart("", 12);
    lines.push(`${pad}${field.header}`);
    field.comments.forEach((line) => lines.push(`${pad}${line}`));
    lines.push(`${pad}{`);

    if (field.properties.length > 0) {
      field.properties.forEach((property) => {
        lines.push(`${pad12}${property}`);
      });
      lines.push("");
    }

    if (field.triggers.length > 0) {
      // lines.push("");
      field.triggers.forEach((trigger) => {
        const triggerLines = FunctionReader.functionToString(trigger, 12);
        triggerLines.forEach((line) => lines.push(line));
        lines.push("");
      });
    }

    if (lines[lines.length - 1] === "") lines.pop();
    lines.push(`${pad}}`);
    return lines;
  }
}
