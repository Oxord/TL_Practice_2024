using System.Text;


namespace Dictionary;
public class Program
{
    const string pathToFile = "../../../Vocabulary.txt";
    const string separatorString = ": ";
    static void Main()
    {
        setupConsoleOuputEncoding();

        Console.WriteLine( "The Dictionary" );

        Dictionary<string, string> dictWords = readTextFromFileAndGenerateDictionaryStructure();

        string userWord = getUserSearchWord();


        if ( !wordIsFound( userWord ) )
        {
            Console.Write( $"Слово '{userWord}' отсутствует в словаре. Хотите его добавить? (Нажмите enter для подтверждения): " );
            if ( String.IsNullOrEmpty( Console.ReadLine() ) )
            {
                string userTransalateWord;
                do
                {
                    Console.Write( $"Укажите перевод для слова '{userWord}': " );
                    userTransalateWord = Console.ReadLine();
                }
                while ( String.IsNullOrWhiteSpace( userTransalateWord ) );
                addWordsToFile( userWord, userTransalateWord );
                Console.WriteLine( "Ваше слово успешно добавлено в файл" );
            }
            else
            {
                Console.WriteLine( ":(" );
            }
        }

        static void setupConsoleOuputEncoding()
        {
            Console.OutputEncoding = Encoding.UTF8;
        }

        Dictionary<string, string> readTextFromFileAndGenerateDictionaryStructure()
        {
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            using ( StreamReader reader = new StreamReader( pathToFile ) )
            {
                string? line;
                while ( ( line = reader.ReadLine() ) != null )
                {
                    addElemsToDictionary( line, dictionary );
                }
                return dictionary;
            }
        }

        void addElemsToDictionary( string fileLine, Dictionary<string, string> dictionary )
        {
            string[] words = fileLine.Split( separatorString );
            dictionary.Add( words[ 0 ], words[ 1 ] );

        }
        string getUserSearchWord()
        {
            Console.Write( "Введите слово( на английском или русском языке ): " );
            return Console.ReadLine().ToLower();
        }

        bool wordIsFound( string searchWord )
        {

            foreach ( KeyValuePair<string, string> dictionatyElement in dictWords )
            {
                if ( dictionatyElement.Value == searchWord )
                {
                    Console.WriteLine( $"{dictionatyElement.Value} - {dictionatyElement.Key}" );
                    return true;
                }
                if ( dictionatyElement.Key == searchWord )
                {
                    Console.WriteLine( $"{dictionatyElement.Key} - {dictionatyElement.Value}" );
                    return true;
                }
            }
            return false;
        }

        void addWordsToFile( string word, string translate )
        {
            using ( StreamWriter writer = new StreamWriter( pathToFile, true ) )
            {
                writer.WriteLine( $"{word}: {translate}" );
            }
        }
    }
}