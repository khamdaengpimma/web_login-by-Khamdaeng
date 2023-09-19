let product_item= [
    {
        id: 1,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 2,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {id: 3,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 4,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 5,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {id: 6,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 7,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 8,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {id: 9,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 10,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 11,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {id: 12,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 13,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 14,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {id: 15,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 16,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {
        id: 17,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    },
    {id: 18,
        img:"https://i.pinimg.com/736x/cb/1b/c7/cb1bc7bc945c0607196ea7959bfe07f4.jpg",
        pd_name:"Anime T-shirt",
        price:100
    }
    
];

$(document).ready(()=>{
    var html =""
    for(let i = 0; i<product_item.length;i++){
        html +=`<div class="product-items ${product_item[i].id}"><img class="product-img" src= ${product_item[i].img} alt="">
        <p>${product_item[i].pd_name}</p>
        <p class="product-price">${product_item[i].price} USD</p>
        </div>`;
    }
$("#product_list").html(html);
});

