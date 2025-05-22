import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Abstract from "../components/Abstract"
import Affiliation from "../components/Affiliation";
import Author from "../components/Author";
import CarouselComponent from "../components/Carousel";
import Citation from "../components/Citation";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import LinkGroup from "../components/LinkGroup";
import Thanks from "../components/Thanks"
import Title from "../components/Title"



const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%]
                       lg:max-w-4xl">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => <title>Interactive Shaping of Granular Media with Reinforcement Learning</title>

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <main className="">
                <Article>
                    {/* Title */}
                    <Title>Interactive Shaping of Granular Media with Reinforcement Learning</Title>

                    {/* Authors */}
                    {/*<div className="flex flex-wrap justify-center text-lg mb-2.5 mt-0 leading-none">*/}
                    {/*    <Author website={""} firstAuthor={true} affiliations={"1"}>First Author</Author>*/}
                    {/*    <Author website={""} firstAuthor={true} affiliations={"1"}>Second Author</Author>*/}
                    {/*    <Author website={""} firstAuthor={false} lastAuthor={true} affiliations={"2"}>Last Author</Author>*/}
                    {/*</div>*/}

                    {/*<Thanks>* Indicates equal contribution</Thanks>*/}

                    {/* Affiliations */}
                    <div className="flex flex-wrap justify-center text-base mb-12 mt-0 leading-none">
                        Under Review
                    </div>

                    {/*/!* Links *!/*/}
                    {/*<LinkGroup arxivUrl={""} pdfUrl={""} otherUrls={*/}
                    {/*    [*/}
                    {/*        ["/bibtex.txt", "BibTex"],*/}
                    {/*        ["", "Code"],*/}
                    {/*        ["", "Video"]*/}
                    {/*    ]}*/}
                    {/*/>*/}
                    
                    {/* Abstract */}
                    <Abstract>
                        Autonomous manipulation of granular media, such as sand, is crucial for applications in construction, excavation, and additive manufacturing.
                        However, shaping granular materials presents unique challenges due to their high-dimensional configuration space and complex dynamics.
                        Traditional rule-based approaches struggle with these complexities, requiring extensive engineering efforts.
                        Reinforcement learning (RL) offers a promising alternative by enabling agents to learn adaptive manipulation strategies through trial and error.
                        Although RL has been successfully applied to rigid and deformable object manipulation, its application to granular media has received little attention.
                        Thus, it has remained an open research question how to define the compact observations for the large configuration space and design an effective reward function.
                        In this work, we present an RL framework that enables a robotic arm with a cubic end-effector to shape granular media into desired structures.
                        Our results demonstrate the effectiveness of the proposed reward formulation for the training of visual policies that manipulate granular media including their real-world deployment.
                    </Abstract>

                    {/* Teaser Video */}
                    <video autoPlay controls muted playsInline loop alt="Teaser Video" className="border-2 border-slate-100 mt-0 rounded-xl mx-auto max-w-[100%] sm:max-w-[90%]">
                        <source src="/videos/teaser.mp4" type="video/mp4"/>
                    </video>

                    {/* Carousel */}
                    {/* <CarouselComponent
                        heading={"Real-world Deployment"}
                        items={[
                            { video: "/videos/carousel_1.mp4", label: "First Item" },
                            { video: "/videos/carousel_2.mp4", label: "Second Item" },
                            { video: "/videos/carousel_3.mp4", label: "Third Item" },
                            { video: "/videos/carousel_4.mp4", label: "Fourth Item" },
                        ]}
                    /> */}

                    {/* Long Video */}
                    {/* <Heading>Video</Heading>
                    <div className="flex justify-left text-base">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.
                    </div>
                    <video controls muted loop alt="Long Video" className="border-2 border-slate-100 mt-4 rounded-xl mx-auto max-w-[100%] sm:max-w-[75%]">
                        <source src="/videos/teaser.mp4" type="video/mp4"/>
                    </video> */}

                    {<Citation/>}

                    </Article>

                <Footer
                    // githubUrl="https://github.com/your-profile"
                    // googleScholarUrl="https://scholar.google.com/citations?user=example"
                    // linkedInUrl="https://www.linkedin.com/in/your-profile"
                />
            </main>
        </div>
    );
};

export default IndexPage;
