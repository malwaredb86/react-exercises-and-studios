export default function hobbyLinks() {
    let title = "Resources for my Hobbies";
    let hobby1 = "www.drop.com";
    let hobby2 = "www.knitpicks.com";
    let hobbyInfo = [hobby1, hobby2];
    return (
        <div>
            <h3>{title}</h3>
            <ol>
                <li><a href={hobbyInfo[0]}>Keyboard supplies</a></li>
                <li><a href={hobbyInfo[1]}>Knitting supplies</a></li>
            </ol >
        </div >
    );
}