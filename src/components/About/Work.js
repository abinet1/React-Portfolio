import "./Work.css";
const Work=()=>{
    return(
        <section className="works">
            <h2 className="work_title">
                <a>Recent Jobs and projects</a>
            </h2>
            <ul className="work_ul">
                <li>
                    <h5 className="work_title">full-stack developer</h5>
                    <small>
                        <span>
                            Addis Software |
                            <time>
                                <span> May.2023 </span> 
                            </time>
                             | on GOING
                        </span>                        
                    </small>
                </li>
                <hr />
                <li>
                    <h5 className="work_title">full-stack developer</h5>
                    <small>
                        <span>
                            Ethio Ark Wood |
                            <time>
                                <span> September.2023 </span> 
                            </time>
                             | on GOING
                        </span>                        
                    </small>
                </li>
                <hr />
                <li>
                    <h5 className="work_title">Software Engineer</h5>
                    <small>
                        <span>
                            Jobs In INSA |
                            <time>
                                <span> September.2022 </span> 
                            </time>
                             | May.2023
                        </span>                        
                    </small>
                </li>
                <hr />
                <li>
                    <h5 className="work_title">Software Engineer (internship)</h5>
                    <small>
                        <span>
                            Bemi Tech group PLC |
                            <time>
                                <span> September.2021 </span>
                            </time>
                            | August.2022
                        </span>                        
                    </small>
                </li>
            </ul>
        </section>
    );
}

export default Work;