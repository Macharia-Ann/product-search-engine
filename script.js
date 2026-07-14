let results = document.querySelector(".results");
const searchItem = document.getElementById("search-item");
const search = () =>{
    let productDivs = document.querySelectorAll(".product");
    let searchBox = searchItem.value.toUpperCase();
    let found = false;
    productDivs.forEach((item)=>{
        let productName = item.getElementsByTagName("h2")[0];
        if(productName){
            let textValue = productName.textContent || productName.innerHTML;
            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                item.style.display = "";
                found = true;
            }
            else{
                item.style.display = "none";
            }
        }
    })
    results.style.display = found ? "none" : "block";
}
searchItem.addEventListener("input", search);