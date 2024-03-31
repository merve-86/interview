import InterviewAccord from "./InterviewAccord";

const Questions = ({data}) => {
    // console.log(data)
    return (
        <div>
            {
                data.map((question) => (
                    <InterviewAccord key={question.id} question={question}/>             
                )) 
            }
        </div>
    )
}

export default  Questions;