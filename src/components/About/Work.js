import "./Work.css";
const Work=()=>{
    return(
        <section className="works">
            <h2 className="work_title">
                <a>Recent Works</a>
            </h2>
            <ul className="work_ul">
                <li>
                    <h4 className="work_title">Software Engineer</h4>
                    <small>
                        <span>
                            Jobs In INSA |
                            <time>
                                <span> November.2022 </span> 
                            </time>
                             | on going
                        </span>                        
                    </small>
                </li>
                <hr />
                <li>
                    <h4 className="work_title">Personal cloud venture</h4>
                    <small>
                        <span>
                            preparing to take aws associate solution architect |
                            <time>
                                <span> February.2022 </span>
                            </time>
                            | on going
                        </span>                        
                    </small>
                </li>
            </ul>
        </section>
    );
}

export default Work;