using System;
using System.IO;
using System.Reflection.PortableExecutable;
using System.Text;


const string PathToFile = "../../../Vocabulary.txt";
const string SeparatorString = ": ";

SetupConsoleOuputEncoding();

Console.WriteLine( "The Dictionary" );

Dictionary<string, string> DictWords = ReadTextFromFileAndGenerateDictionaryStructure();

string UserWord = GetUserSearchWord();


if ( !WordIsFound( UserWord ) )
{
    Console.Write( $"Слово '{UserWord}' отсутствует в словаре. Хотите его добавить? (Нажмите enter для подтверждения): " );
    if ( String.IsNullOrEmpty( Console.ReadLine() ) )
    {
        string UserTransalateWord;
        do
        {
            Console.Write( $"Укажите перевод для слова '{UserWord}': " );
            UserTransalateWord = Console.ReadLine();
        }
        while ( String.IsNullOrWhiteSpace( UserTransalateWord ) );
        AddWordsToFile( UserWord, UserTransalateWord );
        Console.WriteLine( "Ваше слово успешно добавлено в файл" );
    }
    else
    {
        Console.WriteLine( ":(" );
    }
}

static void SetupConsoleOuputEncoding()
{
    Console.OutputEncoding = Encoding.UTF8;
}

Dictionary<string, string> ReadTextFromFileAndGenerateDictionaryStructure()
{
    Dictionary<string, string> dictionary = new Dictionary<string, string>();
    using ( StreamReader reader = new StreamReader( PathToFile ) )
    {
        string? line;
        while ( ( line = reader.ReadLine() ) != null )
        {
            AddElemsToDictionary( line, dictionary );
        }
        return dictionary;
    }
}

void AddElemsToDictionary( string FileLine, Dictionary<string, string> dict )
{
    string[] Words = FileLine.Split( SeparatorString );
    dict.Add( Words[ 0 ], Words[ 1 ] );

}
string GetUserSearchWord()
{
    Console.Write( "Введите слово( на английском или русском языке ): " );
    return Console.ReadLine().ToLower();
}

bool WordIsFound( string SearchWord )
{
    foreach ( var s in DictWords )
    {
        if ( s.Value == SearchWord )
        {
            Console.WriteLine( $"{s.Value} - {s.Key}" );
            return true;
        }
        if ( s.Key == SearchWord )
        {
            Console.WriteLine( $"{s.Key} - {s.Value}" );
            return true;
        }
    }
    return false;
}

void AddWordsToFile( string Word, string Translate )
{
    using ( StreamWriter writer = new StreamWriter( PathToFile, true ) )
    {
        writer.WriteLine( $"{Word}: {Translate}" );
    }
}