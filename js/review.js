const container = document.querySelector(".testimoni-container");

function loadReviews(){

    const reviews =
        JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(review=>{

        container.innerHTML += `
        <div class="testimoni-card">

            <div class="stars">${review.rating}</div>

            <p>"${review.text}"</p>

            <h4>- ${review.name}</h4>

        </div>
        `;

    });

}

function addReview(){

    const name=document.getElementById("review-name").value;
    const rating=document.getElementById("review-rating").value;
    const text=document.getElementById("review-text").value;

    if(name===""||text===""){
        alert("Lengkapi data!");
        return;
    }

    const reviews=
        JSON.parse(localStorage.getItem("reviews"))||[];

    reviews.push({
        name,
        rating,
        text
    });

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

    location.reload();

}

loadReviews();