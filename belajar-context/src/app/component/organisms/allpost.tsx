import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import RecentPost from "../molecules/recentpost";

export default function AllPost(){
    return(
        <Section2 isFancy={true}>
            <Heading>Posts</Heading>
            <RecentPost/>
        </Section2>
    );
}