window.onload = function() {  
    var script = document.createElement('script');
    script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';
    var header = document.getElementsByTagName('script')[0];
    header.parentNode.insertBefore(script, header);
    
};

function X(data) {
    var favorite = data.data.reference;
    var interests = data.data.recommendation;
    populateFavorite(favorite);
    populateInterests(interests);
}

function populateFavorite(favorite) {
    var a = '<a class="product_link" href="http:' + favorite.item.detailUrl + '">';
    a += '<div class="product">';
    a += '<img src="http:' + favorite.item.imageName + '" alt="favorite">';
    a += '<h4 class="product_description">' + (favorite.item.name) + '</h4>';
    if (favorite.item.oldPrice != null)
    a += '<span class="product_price">De: ' + favorite.item.oldPrice + '</span>';
    a += '<br>';
    a += '<span class="product_price">Por: <b>' + favorite.item.price + '</b></span>';
    a += '<span class="product_conditions">' + favorite.item.productInfo.paymentConditions + '</span>';
    a += '</div>';
    a += '</a>';

    document.getElementById("products_favorite").innerHTML = a;
}

function populateInterests(interests) {
    var itens = "";
    for (var i = 0; i < interests.length; i++) {
        itens += '<div class="products_interests">';
        itens += '<a class="product_link" href="http:' + interests[i].detailUrl + '">';
        itens += '<div class="product">';
        itens += '<img src="http:' + interests[i].imageName + '" alt="interests">';
        itens += '<h4 class="product_description">' + (interests[i].name) + '</h4>';
        if (interests[i].oldPrice != null)
        itens += '<span class="product_price">De: ' + interests[i].oldPrice + '</span>';
        itens += '<br>';
        itens += '<span class="product_price">Por: <b>' + interests[i].price + '</b></h4>';
        itens += '<span class="product_conditions">' + interests[i].productInfo.paymentConditions + '</span>';
        itens += '</div>';
        itens += '</div>';
        itens += '</a>';
    }

    document.getElementById("products_interests").innerHTML = itens;
}

function next(){
    var elmnt = document.getElementById("products_interests");
    elmnt.scrollLeft += 100;
} 

function previous(){
    var elmnt = document.getElementById("products_interests");
    elmnt.scrollLeft -= 100;
}    