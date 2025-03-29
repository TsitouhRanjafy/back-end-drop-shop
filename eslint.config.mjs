// @ts-check

import eslint from '@eslint/js';
 
// @ts-expect-error // eslint-disable-line 
import tseslint from "typescript-eslint"

const tsconfigRoot = ""+import.meta.dirname // parser en string

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,

  tseslint.configs.stylistic,
	tseslint.configs.recommendedTypeChecked,{
	  languageOptions: {
			parserOptions: {
				projectService: { 
					allowDefaultProject: [ 
						"eslint.config.mjs",
					],
					defaultProject: "tsconfig.json"
				 },
				project: "tsconfig.json",
				tsconfigRootDir: tsconfigRoot,
				projectFolderIgnoreList: ["**dist**"],
				sourceType: "module"
			},
		},
	}
);

