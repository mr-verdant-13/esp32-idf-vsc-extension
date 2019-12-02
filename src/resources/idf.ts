import * as vscode from 'vscode';

import { Resource } from "./resource";

export class Idf extends Resource {
    protected constructor() {
        super();
    }

    protected static readonly label: string = 'ESP-IDF API';

    protected static readonly field: string = 'IDF_PATH';

    protected static readonly MandatoryFolders: Array<string> = [
        'components',
        'examples',
    ];

    public static async validate(resourceAbsolutePath: string) {
        try {
            if (!(await this.isValidFolder(resourceAbsolutePath))) {
                throw Error('The selected folder is not an ESP-IDF one.');
            }
        } catch (error) {
            throw error;
        }
    }

    public static readonly TwoLevelSettings: Array<[string, Array<[string, Array<string>]>]> = [
        [
            'terminal.integrated.env.windows',
            [
                [
                    'IDF_PATH',
                    ['', '']
                ]
            ]
        ],
        [
            'terminal.integrated.env.linux',
            [
                [
                    'IDF_PATH',
                    ['', '']
                ]
            ]
        ],
    ];

    public static async register(context: vscode.ExtensionContext) {
        try {
            await this.registerResource(context, this.label, this.field);
        } catch (error) { throw error; }
    }
}