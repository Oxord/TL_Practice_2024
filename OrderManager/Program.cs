const int DeliveryTime = 3;
DateTime TodayDate = DateTime.Today;
string Product;
decimal Count;
string Buyer;
string Address;
bool IsOrderDataValid = false;

while ( !IsOrderDataValid )
{
    RequestOrderData();
    IsOrderDataValid = ConfirmOrder( Product, Count, Buyer, Address );
    if ( IsOrderDataValid )
    {
        OrderCreatedSuccessfully( Product, Count, Buyer, Address );
    }
    else
    {
        Console.WriteLine( "Тогда давайте создадим заказ ещё раз!" );
    }
}



void RequestOrderData()
{
    Console.Write( "Укажите название товара: " );
    Product = Console.ReadLine();
    while ( String.IsNullOrWhiteSpace( Product ) )
    {
        Product = Console.ReadLine();
    }
    Console.Write( "Укажите кол-во товара: " );

    while ( !decimal.TryParse( Console.ReadLine(), out Count ) )
    {
        Console.Write( "Неверные данные! Укажите количетсво товара: " );
    }

    Console.Write( "Укажите ваше имя: " );
    Buyer = Console.ReadLine();
    while ( String.IsNullOrWhiteSpace( Buyer ) )
    {
        Buyer = Console.ReadLine();
    }

    Console.Write( "Укажите адрес доставки: " );
    Address = Console.ReadLine();
    while ( String.IsNullOrWhiteSpace( Address ) )
    {
        Address = Console.ReadLine();
    }

}

static bool ConfirmOrder( string Order_Name, decimal Order_Amount, string Buyer_Name, string Delivery_Address )
{
    Console.WriteLine( $"Здравствуйте, {Buyer_Name}, вы заказали {Order_Amount} {Order_Name} на адрес {Delivery_Address}, все верно?" );
    Console.Write( " (нажмите enter, если всё верно) " );
    if ( String.IsNullOrEmpty( Console.ReadLine() ) )
        return true;
    else
        return false;
}


void OrderCreatedSuccessfully( string Order_Name, decimal Order_Amount, string Buyer_Name, string Delivery_Address )
{
    Console.WriteLine( $"{Buyer_Name}! Ваш заказ {Order_Name} в количестве {Order_Amount} оформлен! Ожидайте доставку по адресу {Delivery_Address} к {TodayDate.AddDays( DeliveryTime ).ToString( "D" )}" );
}