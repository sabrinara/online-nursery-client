import {
    Table,
    TableBody,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  

 
 const AllProductsTable = () => {
     const data = [
        {
            id: 1,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Leopard Lily",
            price: 200,
            rating: 2.5,
        },
        {
            id: 2,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Calathea Plant",
            price: 200,
            rating: 3.5,
        },
        {
            id: 3,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Spring Plant",
            price: 200,
            rating: 5,
        },
        {
            id: 4,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
            rating: 5,
        },
        {
            id: 5,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
            rating: 5,
        },
        {
            id: 6,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
            rating: 5,
        },
        {
            id: 7,
            imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
            title: "Tulip",
            price: 200,
            rating: 5,
        },
    ]

    return (
        <div className="container w-full ">
             <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="text-center">
          <TableHead className="w-[100px]"></TableHead>
          <TableHead >Title</TableHead>
          <TableHead className="pl-11" >Image</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead className="text-right">Price</TableHead>
        
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.id} className="">
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell className="">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-24 h-24 object-cover"
              />
            </TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell className="text-right">{item.price}$ </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  
        </div>
    );
 };
 
 export default AllProductsTable;