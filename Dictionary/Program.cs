using System.IO;
using System.Text;

const string PathToFile = "../../../Vocabulary.txt";

Console.WriteLine( "The Dictionary" );



Console.Write( "Введите слово(на английском или русском языке): " );
string Word = Console.ReadLine();

if ( IsWordExistsInDictionary( Word ) )
{
    Console.WriteLine( "We Found Your Word!" );
}
else
{
    //слова нет в словаре
}
//поиск слова в словаре
//если слово не найдено - предложить пользователю добавить его в словарь
//если слово есть - то выводим его перевод. 

bool IsWordExistsInDictionary( string SearchWord )
{
    string TextFromFile = ReadTextFromFile();
    if ( TextFromFile.ToLower().Contains( SearchWord ) || TextFromFile.ToUpper().Contains( SearchWord ) )
    {
        return true;
    }
    else
    {
        return false;
    }
}

string ReadTextFromFile()
{
    using ( StreamReader reader = new StreamReader( PathToFile, Encoding.ASCII ) )
    {
        string text = reader.ReadToEnd();
        return text;

    }
}