import { TypescriptParser } from "typescript-parser";

class ASTparser  {
    async parse(source1: string) {
        const parser = new TypescriptParser();
        const parsed = await parser.parseSource(source1);
        console.log(parsed);
    }

}

export default ASTparser;