import { Card, Container, Row, Col, Image } from "react-bootstrap"
import shelterImage from "../assets/images/trending/shelter.jpg"
import avatarImage from "../assets/images/trending/avatar.jpg"
import martysupremeImage from "../assets/images/trending/martysupreme.jpg"
import mercyImage from "../assets/images/trending/mercy.jpg"
import thehousemaidImage from "../assets/images/trending/thehousemaid.jpg"
import twentyeightyearsImage from "../assets/images/trending/twentyeightyears.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={shelterImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Shelter</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Mantan assassin Jason Statham hidup menyendiri di pulau terpencil Skotlandia, tapi setelah nolongin cewek remaja yatim piatu dari badai ganas, masa lalunya yang gelap balik lagi—agen pemerintah buru mereka berdua, bikin perjalanan survival penuh aksi dan rahasia yang bakal terbongkar.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col><Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={avatarImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Avatar: Fire and Ash </Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Keluarga Sully masih berduka atas kematian Neteyam, tapi tiba-tiba diserang suku Na'vi ganas bernama Ash People yang dipimpin Varang kejam—konflik makin panas, rahasia kelam terkuak, dan pertarungan besar di Pandora bakal bikin lo nggak bisa lepas mata dari layar.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={martysupremeImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Mercy</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Detektif Chris Pratt bangun terikat, dituduh bunuh istrinya oleh AI hakim yang dulu dia dukung sendiri—cuma 90 menit buat buktiin dia nggak bersalah, kalau enggak, langsung mati, rahasia kelam mulai terbuka.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={mercyImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">The Housemaid</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Millie (Sydney Sweeney) dapat kerja jadi pembantu di rumah mewah keluarga kaya raya, tapi begitu masuk, mimpi indah itu berubah jadi mimpi buruk penuh rahasia gelap dan manipulasi yang bikin lo ragu siapa sebenarnya yang terjebak.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={thehousemaidImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">Marty Supreme</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Marty Mauser (Timothée Chalamet) kerja jualan sepatu di toko paman sambil mimpi jadi juara dunia pingpong, tapi karena ambisi gila dia nekat ngutang, selingkuh, hustle segala cara sampe ke neraka dan balik lagi demi buktiin dia yang terbaik.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={twentyeightyearsImage} alt="Shelter Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                    <Card.Title className="text-center">28 Years Later: The Bone Temple</Card.Title>
                                    <Card.Text className="text-left synopsis">
                                        Spike kejebak gabung geng Satanist gila pimpinan Sir Lord Jimmy Crystal, sementara dokter Kelson bangun tumpukan tulang gede dan nemu rahasia besar bareng infected alpha Samson.                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending 