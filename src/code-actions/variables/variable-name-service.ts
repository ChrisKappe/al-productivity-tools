import _ = require("lodash");
import VariableAbbreviations from "./variable-abbreviations";
import IVariableDeclaration from "./variable-declaration";
import StringHelper from "../../helpers/string-helper";
import ALObjectTypes from "../../al-objects/al-object-types";

export default class VariableNameService {
  static getNameSuggestions(variable: IVariableDeclaration): Array<string> {
    let prefix = variable.temporary ? "Temp" : "";

    if(ALObjectTypes.isALObjectType(variable.dataType)) {
      const words = StringHelper.splitWords(variable.objectName);
      const names: Array<string> = [];
      if (VariableAbbreviations.getShortName(variable.objectName)) {
        const fullShortForm = `${prefix}${VariableAbbreviations.getShortName(
          variable.objectName
        )}`;
        if (names.indexOf(fullShortForm) === -1) names.push(fullShortForm);
      }

      return [...names, ...VariableNameService.generateNames(words)];
    }

    return [];
  }

  private static generateNames(
    words: Array<string>,
    prefix: string = ""
  ): Array<string> {
    const wordsMatrix: Array<Array<string>> = [];
    words.forEach((word) => {
      const innerList = [word];
      const abbreviation = VariableAbbreviations.getAbbreviation(word);
      if (abbreviation && innerList.indexOf(abbreviation) === -1)
        innerList.push(abbreviation);
      wordsMatrix.push(innerList);
    });

    const names2 = this.generateNamesFromMatrix(wordsMatrix, 0);
    const names: Array<string> = [];
    names2.forEach((name) => {
      const nameWithPrefix = `${prefix}${name}`;
      if (names.indexOf(nameWithPrefix) === -1) names.push(nameWithPrefix);
    });

    return _.sortBy(names, (name) => name.length);
  }

  private static generateNamesFromMatrix(
    wordsMatrix: Array<Array<string>>,
    index: number
  ): Array<string> {
    const names: Array<string> = [];
    const words = wordsMatrix[index];
    let namesFromLeaf: Array<string> = [];

    if (index + 1 < wordsMatrix.length) {
      namesFromLeaf = this.generateNamesFromMatrix(wordsMatrix, index + 1);
      words.forEach((name) => {
        namesFromLeaf.forEach((nameL2) => {
          names.push(`${name}${nameL2}`);
        });
      });
    } else {
      words.forEach((name) => {
        names.push(name);
      });
    }

    return names;
  }
}
