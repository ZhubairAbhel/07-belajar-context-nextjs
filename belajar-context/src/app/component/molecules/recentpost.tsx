import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPost(){
    return(
        <Section2 isFancy={true}>
            <Post 
                title="Cita rasa lisbon"
                body="...those pasteis de nata!">
            </Post>

            <Post
                title="buenos aires dalam irama tango"
                body="saya menyukainya!">
            </Post>

            <Post
                title="Zhubair Abhel"
                body="2141720248">
            </Post>
        </Section2>
    );
}