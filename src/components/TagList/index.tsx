import { useEffect, useState } from "react";

const TagList = () => {
    const [tags, setTags] = useState<string[]>([]);

    const fetchTags = async () => {
        
        setTimeout(()=>{
            console.log("time out")
            setTags(["tag1", "tag2", "tag3"]);
        }, 500)

        
    };

    useEffect(() => {
        fetchTags();
    }, []);

    return (
        <div>
            <ul>
                {tags.map((tag) => (
                    <li key={tag}> {tag} </li>
                ))}
            </ul>
        </div>
    );
};

export default TagList;

const delay = async(time: number) => {
    setTimeout(() => {
        console.log("timeout");
    }, time);
};
