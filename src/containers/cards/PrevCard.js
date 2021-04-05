const PrevCard = () => {
    return (
        <div className="main">
            <h1>Home Page</h1>
            <h2>{usersD[0] ? usersD[0].article[usersD[0].article.length - 1].title : ''}</h2>

            <img src={usersD[1] ? usersD[1].article[usersD[1].article.length - 1].postImg : ''} alt='img' />
            <h4>{usersD[2] ? usersD[2].name : ''}</h4>
            <p>{usersD[1] ? usersD[1].article[usersD[1].article.length - 1].postContent : ''}</p>
        </div>
    )
}

export default PrevCard;