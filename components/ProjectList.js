import Link from "next/link";

export default function ProjectList() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/cardGame"><a>카드 맞추기 게임</a></Link>
                </li>
                <li>
                    <Link href="/habitTracker"><a>해빗 트래커</a></Link>
                </li>
                <li>
                    <Link href="/drawingBoard"><a>드로잉 보드</a></Link>
                </li>
            </ul>
            <style jsx>{`
                li{
                    list-style:none;
                    display:inline-block;
                    margin:0 8px
                }
                a{
                    display:flex;
                    width:200px;
                    height:50px;
                    border:1px solid #222;
                    justify-content:center;
                    align-items:center
                }
            `}
            </style>
        </>
    );
}