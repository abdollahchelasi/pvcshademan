import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav, Accordion, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>دکوراسیون شادمان - رمکان</title>
        <meta name="description" content="تولیدی درب و پنجره UPVC نوین ترک فروش و نصب PVC طراحی یا ساخت و اجرای انواع سایبان PVC { فروش بصورت نقد و اقساط فقط با چک }" />
        <meta name="keywords" content="دکوراسیون شادمان , کناف شادمان ,  درب و پنجره شادمان , دکوراسیون رمکان ,  درب و پنجره رمکان , کناف رمکان, دکوراسیون شادمان رمکان"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet" />
      </Head>
      <main dir='rtl' id='home'>
        <Container className={styles.min} fluid >
          <Row>
            <Col>
              <Navbar expand="lg" className={styles.nvabb}>
                <Container>
                  <Navbar.Brand href="#home" className={styles.pvc}>
                    <p className={styles.dekor}>دکوراسیون شادمان - رمکان</p>
                  </Navbar.Brand>
                  <Navbar.Brand href="#home" className={styles.pvc}>
                    <img width={100} src='icon.png' />
                  </Navbar.Brand>
                  <Navbar.Toggle id={styles.btn} aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home" className={styles.home} >صفحه اصلی</Nav.Link>
                      <Nav.Link href="#UPVC" className={styles.home}>طرح های UPVC</Nav.Link>
                      <Nav.Link href="#Call" className={styles.home}>ارتباط با ما</Nav.Link>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
        
        <Container className={styles.bg1} fluid>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <Row>
            
            <Col sm={5}>
              <img className={styles.imgsh} width={150} src='https://lluminare.com/assets/images/resources/8/thermo-front-0.gif' />
            </Col>
            <Col sm={2} />
            <Col sm={4}>
              <div className={styles.shademanp}>
                <img width={100} src='icon.png' />
                <p >
                  تولیدی درب و پنجره UPVC نوین ترک
                  فروش و نصب PVC
                  طراحی یا ساخت و اجرای انواع سایبان PVC
                </p>
              </div>


              <p className={styles.pch}>فروش بصورت نقد و اقساط فقط با چک</p>
            </Col>
            <Col sm={12}>
              <Container fluid className={styles.up}>
                <Row>


                  <Col sm={4}>
                    <Container className={styles.saiban}>
                      <Row>
                        <Col>
                          <img className={styles.upv} width={"50%"} src='https://clinicyadi.ir/wp-content/uploads/2020/11/2.jpg' />
                          <hr />
                          <p>سایبان PVC</p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>


                  <Col >
                    <Container className={styles.saiban}>
                      <Row>
                        <Col>
                          <img className={styles.upv} width={"50%"} src='https://iran-tejarat.com/AdImages/2022/10/12/16490360-2022-10-12-13-40-10.jpg' />
                          <hr />
                          <p>فروش و نصب  PVC</p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>


                  <Col>
                    <Container className={styles.saiban}>
                      <Row>
                        <Col>
                          <img className={styles.upv} width={"50%"} src='https://baamarc.com/fa/wp-content/uploads/2022/03/%D8%A8%D8%B1%D8%B1%D8%B3%DB%8C-%D9%85%D8%B1%D8%A7%D8%AD%D9%84-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%D8%B3%D9%82%D9%81-%DA%A9%D9%86%D8%A7%D9%81-min.jpg' />
                          <hr />
                          <p>فروش و نصب  کناف</p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>


                  <Col sm={4}>
                    <Container className={styles.saiban}>
                      <Row>
                        <Col>
                          <img className={styles.upv} width={"50%"} src='https://www.rahavardupvc.ir/wp-content/uploads/2020/09/Doors-upvc.jpg' />
                          <hr />
                          <p>تولید و نصب درب و پنجره دوجداره UPVC</p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>


                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container id='UPVC'>

          <Row>



            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i1.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i1.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>نمونه اجرا شده برای مشتری عزیز
                      با طرح دکوراتیو طلایی</p>

                    <hr />

                    <p className={styles.code}>کد 10</p>
                  </Col>


                </Row>
              </Container>
            </Col>




            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i2.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i2.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه پنجره با دکوراتیو خطی طلایی
                    </p>

                    <hr />

                    <p className={styles.code}>کد 20</p>
                  </Col>


                </Row>
              </Container>
            </Col>







            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i3.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i3.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      پنجره های طرح هلالی

                    </p>

                    <hr />

                    <p className={styles.code}>کد 30</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i4.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i4.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....با دکوراتیو شیشه طلایی و سفید
                    </p>

                    <hr />

                    <p className={styles.code}>کد 40</p>
                  </Col>


                </Row>
              </Container>
            </Col>





            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i5.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i5.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      اجرای درب و پنجره با دکوراتیو طرح دار سفید و طلایی
                    </p>

                    <hr />

                    <p className={styles.code}>کد 50</p>
                  </Col>


                </Row>
              </Container>
            </Col>







            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i6.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i6.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      پنل دکوراتیو ساخت ترکیه..قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....با عرض 90 سانت ب بالا
                    </p>

                    <hr />

                    <p className={styles.code}>کد 60</p>
                  </Col>


                </Row>
              </Container>
            </Col>






            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i7.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i7.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه کار شیشه دکوراتیو طرحدار قابل اجرا با آیینه
                    </p>

                    <hr />

                    <p className={styles.code}>کد 70</p>
                  </Col>


                </Row>
              </Container>
            </Col>




            <Col sm={5}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i8.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i8.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب دکوراتیو شیشه سفید رنگ
                    </p>

                    <hr />

                    <p className={styles.code}>کد 80</p>
                  </Col>


                </Row>
              </Container>
            </Col>





            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i9.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i9.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب تمام شیشه با طرحcnc
                      قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....
                    </p>

                    <hr />

                    <p className={styles.code}>کد 80</p>
                  </Col>


                </Row>
              </Container>
            </Col>




            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i10.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i10.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب با دکوراتیو شیشه ترکیب رنگ سفید و طلایی
                    </p>

                    <hr />

                    <p className={styles.code}>کد 90</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i11.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i11.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      پنل دکوراتیو ساخت ترکیه
                      قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....
                      با عرض 80 سانت ب بالا
                    </p>

                    <hr />

                    <p className={styles.code}>کد 100</p>
                  </Col>


                </Row>
              </Container>
            </Col>

            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i12.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i12.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه درب شیشه طرحدار و پنل
                    </p>

                    <hr />

                    <p className={styles.code}>کد 110</p>
                  </Col>


                </Row>
              </Container>
            </Col>



            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i13.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i13.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب طرحدار با cnc
                    </p>

                    <hr />

                    <p className={styles.code}>کد 120</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i14.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i14.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب سرویس ساده با دکوراتیو شیشه
                    </p>

                    <hr />

                    <p className={styles.code}>کد 130</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i15.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i15.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب طرحدار تمام شیشه طلایی
                    </p>

                    <hr />

                    <p className={styles.code}>کد 140</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i16.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i16.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه کار ساخته شده درب ورودی برای مشتری عزیز
                    </p>

                    <hr />

                    <p className={styles.code}>کد 150</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={7}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i17.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i17.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب تمام شیشه
                      قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....
                      با عرض 85 سانت ب بالا
                    </p>

                    <hr />

                    <p className={styles.code}>کد 160</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i18.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i18.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه اجرا شده با آیینه
                    </p>

                    <hr />

                    <p className={styles.code}>کد 170</p>
                  </Col>


                </Row>
              </Container>
            </Col>





            <Col sm={12}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i19.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i19.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب تمام شیشه با دکوراتیو طلایی و سفید..قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....
                    </p>

                    <hr />

                    <p className={styles.code}>کد 180</p>
                  </Col>


                </Row>
              </Container>
            </Col>



            <Col sm={12}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i20.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i20.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب دو تیکه هم ساده هم دکوراتیو شیشه با حالت بازشو متحرک
                    </p>

                    <hr />

                    <p className={styles.code}>کد 190</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={10}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i21.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i21.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه ساخت پنجره برای مشتری عزیز
                    </p>

                    <hr />

                    <p className={styles.code}>کد 200</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={8}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i22.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i22.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب سرویس ساده با طرح دکوراتیو شیشه سفید رنگ
                    </p>

                    <hr />

                    <p className={styles.code}>کد 210</p>
                  </Col>


                </Row>
              </Container>
            </Col>




            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i23.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i23.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه ساخت پنجره برای مشتری عزیز
                    </p>

                    <hr />

                    <p className={styles.code}>کد 220</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i24.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i24.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      پنل دکوراتیو ساخت ترکیه..قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....با عرض 78 سانت ب بالا
                    </p>

                    <hr />

                    <p className={styles.code}>کد 230</p>
                  </Col>


                </Row>
              </Container>
            </Col>



            <Col sm={9}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i25.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i25.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      پنل دکوراتیو ساخت ترکیه قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....
                    </p>

                    <hr />

                    <p className={styles.code}>کد 240</p>
                  </Col>


                </Row>
              </Container>
            </Col>



            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i26.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i26.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه اجرا شده پنجره هلالی برای مشتری عزیز
                    </p>

                    <hr />

                    <p className={styles.code}>کد 250</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i27.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i27.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه ساخته شده پنجره برای مشتری عزیز
                    </p>

                    <hr />

                    <p className={styles.code}>کد 260</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i28.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i28.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه کار پنجره با طرح دکوراتیو شیشه دکوراتیوها قابل تغییر هستند..
                    </p>

                    <hr />

                    <p className={styles.code}>کد 270</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i29.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i29.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه اجرا شده برای مشتری عزیزپنل دکوراتیو ساخت ترکیه..قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....
                    </p>

                    <hr />

                    <p className={styles.code}>کد 280</p>
                  </Col>


                </Row>
              </Container>
            </Col>
 



            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i30.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i30.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      پنل دکوراتیو ساخت ترکیه..قابل اجرا برای درب سرویس.حمام.راهرو.ورودی و.....

                    </p>

                    <hr />

                    <p className={styles.code}>کد 290</p>
                  </Col>


                </Row>
              </Container>
            </Col>



            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i31.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i31.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      نمونه اجرا شده برای مشتری عزیز
                    </p>

                    <hr />

                    <p className={styles.code}>کد 300</p>
                  </Col>


                </Row>
              </Container>
            </Col>


            <Col sm={6}>
              <Container>


                <Row className={styles.upvcimg}>
                  <Col sm={12}>
                    <img width={60} src='/icon.png' />
                  </Col>
                  <Col >
                    <Link href={"/upvc/i32.jpg"} target={"#"}>
                      <img className={styles.imgs} width={150} src='/upvc/i32.jpg' />

                    </Link>
                  </Col>
                  <Col >
                    <p className={styles.pp}>
                      درب های سرویس و حمام با طرح دکوراتیو شیشه سفید رنگ
                    </p>

                    <hr />

                    <p className={styles.code}>کد 310</p>
                  </Col>


                </Row>
              </Container>
            </Col>

          </Row>

        </Container>

        <Container fluid className={styles.tamas} id="Call">
          <Row>
            <Col sm={12}>

            <Col className={styles.img1}>
                      <Row>
                        <Col  sm = {12}>
                        <h2 className={styles.h22}>ارتباط با ما</h2>
                        </Col>
                        <Col  >

                          <img className={styles.sh} src='/sh.jpg' />
                          <h5>مدیریت : <b className={styles.ahmad}>احمد شادمان </b></h5>

                          <h5>شماره تماس : <b className={styles.ahmad}>09173630491</b></h5>
                          <h5>شماره واتساپ : <b className={styles.ahmad}>09353630491</b></h5>
                          <h5>شماره تماس دفتر : <b className={styles.ahmad}>09175768357</b></h5>
                          <hr />

                          <h5>آدرس : <b className={styles.ahmad}>جزیــره ي قشم،روستاي باغبالـا_فروشگاه PVC و سایبان شادمان</b></h5>
                          <h5>شعبه دوم : <b className={styles.ahmad}>جزیره قشم - شهر رمکان جنب بانک ملت , تولیدی درب و پنجره UPVC نوین ترک</b></h5>
                          <h5>ساعت کاری و پاسخ دهی  : <b className={styles.ahmad}>صبح ساعت 9 الی 12:30 و عصر ساعت 16 الی 21:00</b></h5>



                        </Col>

                      </Row>
                    </Col>


             
            </Col>

            <Col className={styles.foot}>
            <p>طراحی و توسعه توسط <a target={"#"} href='https://abdollahchelasi.vercel.app/' className={styles.abd}><b> عبدالله چلاسی </b></a></p>
            </Col>

            
          </Row>
        </Container>
        





      </main>
    </>
  )
}
