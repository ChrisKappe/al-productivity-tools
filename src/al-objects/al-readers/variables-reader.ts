import { Keywords } from "../keywords";
import { ITokenReader } from "../models/ITokenReader";
import { IVariable } from "../models/IVariable";
import AttributeReader from "./attribute-reader";
import { VariableReader } from "./variable-reader";

export class VariablesReader {
  static read(tokenReader: ITokenReader): IVariable[] {
    if (!this.hasVariables(tokenReader)) {
      return [];
    }

    return this.readVariables(tokenReader);
  }

  private static hasVariables(tokenReader: ITokenReader) {
    let value = tokenReader.peekTokenValue();
    if (value.toLowerCase() !== "var") {
      return false;
    }

    tokenReader.next();
    tokenReader.readWhiteSpaces();
    return true;
  }

  private static readVariables(tokenReader: ITokenReader): IVariable[] {
    const variables: IVariable[] = [];
    let preBuffer: string[] = [];
    let resetIndex = tokenReader.pos;

    while (tokenReader.pos + 3 < tokenReader.tokens.length) {
      // Comments
      if (tokenReader.tokenType() === "comment") {
        preBuffer.push(...tokenReader.readComments());
        continue;
      }

      // Attributes
      const attribute = AttributeReader.read(tokenReader, Keywords.Variables);
      if (attribute.length > 0) {
        preBuffer.push(attribute);
        continue;
      }

      const variable = VariableReader.read(tokenReader, false, resetIndex);
      if (!variable) {
        tokenReader.pos = resetIndex;
        return variables;
      }

      variable.preVariable = preBuffer;
      variables.push(variable);

      preBuffer = [];
      resetIndex = tokenReader.pos;
    }

    tokenReader.readWhiteSpaces();

    return variables;
  }
}