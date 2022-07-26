import "./Work.css";
const Work=()=>{
    return(
        <section className="works">
            <h2 className="work_title">
                <a>Recent Works</a>
            </h2>
            <ul className="work_ul">
                <li>
                    <h4 className="work_title">Junior Web Developer</h4>
                    <small>
                        <span>
                            Jobs In EBC |
                            <time>
                                <span> July.14.2022 </span> 
                            </time>
                             | on going
                        </span>                        
                    </small>
                </li>
                <hr />
                <li>
                    <h4 className="work_title">Personal Web Developer Project</h4>
                    <small>
                        <span>
                            Jobs In EBC |
                            <time>
                                <span> July.14.2022 </span>
                            </time>
                            | on going
                        </span>                        
                    </small>
                </li>
                <hr />
                <li>
                    <h4 className="work_title">Junior Web Developer</h4>
                    <small>
                        <span>
                            Internship In BTG |
                            <time>
                                <span> September.5.2021 </span>
                            </time>
                            | 8 mounth
                        </span>                        
                    </small>
                </li>
            </ul>
        </section>
    );
}

export default Work;