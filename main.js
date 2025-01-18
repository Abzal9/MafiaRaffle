* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

#redButton {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-right: 10px;
    position: relative;
}

#numberInput {
    padding: 10px;
    font-size: 16px;
    width: 150px;
}

.bottomButtons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}

#yellowButton {
    background-color: yellow;
    padding: 10px 20px;
    font-size: 16px;
}

#blueButton {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
}

#roleList {
    position: absolute;
    top: 70px;
    left: calc(50% + 50px); /* Смещаем список вправо */
    background-color: white;
    border: 1px solid #ccc;
    width: 200px;
    display: none; /* По умолчанию скрыто */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#roleList ul {
    list-style-type: none;
    padding: 0;
}

#roleList ul li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

#roleList ul li:last-child {
    border-bottom: none;
}

#roleList ul li:hover {
    background-color: #f0f0f0;
}

.hidden {
    display: none;
}
