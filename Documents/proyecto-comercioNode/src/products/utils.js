const { Workbook } = require("excel4node");

const excel_generator = (products,res,name) => {

    const xl = requiere('excel4node')
    
    products = products.map((product)=> {
        let id = product._id.toString();

        delete product._id
        return {
            id,
            ...product
        }
    })

    let wb = new xl.Workbook();
    let xs = wb.addWorksheet('inventario');

    for (i= 1 ; i <= products.lenght ; i++){
        for( j =1; j <= Object.values(products[0]).length ; j++ ){
            let data = Object.values(products[i - 1])[j - 1]
            if( typeof data === string) {
                ws.cell(i , j).string(data)
            }else{
                ws.cell( i , j).number(data)
            }
        }
    }

    wb.write(`${name}.xlsx` , res)
}

module.exports.ProductsUtils = {
    excel_generator
}