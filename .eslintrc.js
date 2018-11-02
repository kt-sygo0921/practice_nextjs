module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    plugins: ["react", "jsx-a11y", "import", "prettier"],
    rules: {
        "prettier/prettier": [
            2,
            {
                arrowParens: "avoid",
                bracketSpacing: false,
                jsxBracketSameLine: true,
                printWidth: 120,
                singleQuote: true,
                trailingComma: "es5",
                tabWidth: 4,
            },
        ],
        // .jsファイル内のReact jsx表記を許可する
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"],
            },
        ],
        // SFCファイル内 package reactのimport記述は書かなくても良い
        "react/react-in-jsx-scope": 0,
        // インデントは4スペース
        "react/jsx-indent": ["error", 4],
        // if制御で最終的に何も返さなくてもOK
        "consistent-return": 0,
        "no-unused-expressions": 0,
        // .jsファイル内でDependenciesのパッケージをimportしてもOK
        "import/no-extraneous-dependencies": 0,
        // < > " ' はescapeせずに使ってもOK
        "react/no-unescaped-entities": 0,
        // 変数に _ 使ってもOK
        "no-underscore-dangle": 0,
        // propTypes.object.isRequired を許容する
        // ライブラリから提供されるobjectのデータまで型定義することが難しいため
        "react/forbid-prop-types": 0,
        // dynamic-requireを許可 静的ページ 言語判定後にrequireパスを分岐しているため
        "global-require": 0,
        "import/no-dynamic-require": 0,
        // labelタグ内にInputタグをwrapする必要がある・htmlForPropsにIDまたはInputの指定が必要
        // ver6.1.0以降非推奨になっているため対象から削除
        "jsx-a11y/label-has-for": 0,
    },
    env: {
        jest: true,
    },
    globals: {
        jsdom: false,
    },
};
