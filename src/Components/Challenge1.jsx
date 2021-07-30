import React from 'react'

const Challenge1 = () => {

    const user = {
        name: 'Juan Esteban Moná en code.',
        location: 'Medellín-Colombia.',
        foodType: 'Burgers.',
        age: 20,
        likes: 'Coding into the wee hours of the morning.',
        facebookUsername: 'juanmona21.',
        avatar:
            'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.6435-9/p526x296/224681612_4258830240862319_3031228297075438082_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeEy1sOg3ZvIaM5vS1b-fs-hxTUx2VJF9QDFNTHZUkX1AEcQQKWI_gQiII8r38KIdsWiw32A9XiQCuDkbTG10OW7&_nc_ohc=SissGbuYgfEAX8_dbTA&_nc_ht=scontent.feoh3-1.fna&oh=f0cd0345663bcd5853e20c7a5156180b&oe=6128C002'
    }
    const { name, location, foodType, age, likes, facebookUsername, avatar } = user

    return (
        <div>
            <h1>Display simple data</h1>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <ul class="list-group">
                            <li class="list-group-item"> <strong>Name:</strong> {name}</li>
                            <li class="list-group-item"> <strong>Location:</strong> {location}</li>
                            <li class="list-group-item"> <strong>FoodType:</strong> {foodType}</li>
                            <li class="list-group-item"> <strong>Age:</strong> {age}</li>
                            <li class="list-group-item"> <strong>Likes:</strong> {likes}</li>
                            <li class="list-group-item"> <strong>FacebookUsername:</strong> {facebookUsername} <a href="https://www.facebook.com/juanmona21">Juan's profile</a> </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="card" style={{width: 225}}>
                            <img src={avatar} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Application developer for HappyCondo in react.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Challenge1
