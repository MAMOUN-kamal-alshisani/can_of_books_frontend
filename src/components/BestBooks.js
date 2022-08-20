import { React, Component } from "react";
import axios from "axios";
import ItemsCarousel from "react-items-carousel";
import "../css/bookstore.css";
import AddForm from "./addForm";
import UpdateForm from "./updateForm";
// import UpdateData from "./update";
import SectionOfBestBooks from "./section";
import { withAuth0 } from "@auth0/auth0-react";
class BestBooks extends Component {


  constructor() {
    super();

    this.state = {
      BookData: [],
      indexNum: 0,
      showModel: false,
      showUpdateForm: false,
      description: "",
      status: "",
      img: "",
      title: "",
    };
  }
  async componentDidMount() {
    const url = `https://can-of-books-srv.herokuapp.com/books?EmailQuery=${this.props.auth0.user.email}`;

    let ApiData = await axios.get(url);
    console.log(ApiData);
    await this.setState({
      BookData: ApiData.data[0].book,
    });
    console.log(ApiData.data[0].book);
  }

  ActiveIndexItem = (index) => {
    this.setState({ indexNum: index });
  };
///// add Modal methods ///

  handleClose = () => {
    this.setState({
      showModel: false,
    });
  };
  handleShow = () => {
    this.setState({
      showModel: true,
    });
  };
  //////////////////////////////
///// update Modal methods ///
  handleUpdateClose = () => {
    this.setState({
      showUpdateForm: false,
    });
  };
  handleUpdateShow = () => {
    this.setState({
      showUpdateForm: true,
    });
  };
////////////////////////////////


//// post operation method too add new data to api!////
  addnewBook = async (e) => {
    e.preventDefault();
    // e.preventDefault()

    let description = e.target.description.value;
    let status = e.target.status.value;
    let img = e.target.img.value;
    let title = e.target.title.value;

    let addBooks = {
      description: description,
      status: status,
      img: img,
      title: title,
    };

    try {
      let postUrl =
        `https://can-of-books-srv.herokuapp.com/books?EmailQuery=${this.props.auth0.user.email}`;
      let AddPi = await axios.post(postUrl, addBooks);
      console.log(AddPi.data, addBooks);

      await this.setState({
        BookData: AddPi.data,
        showModel: true,
      });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
//// delete operation method to delete data form Api!////

  deleteTheBook = async (index) => {
    // 
    let url = `https://can-of-books-srv.herokuapp.com/books/${index}?EmailQuery=${this.props.auth0.user.email}`;
    try {
      // //  http://localhost:3005/books/0?EmailQuery=mamoun.alshishani@yahoo.com ////

      let deleteData = await axios.delete(url);

      await this.setState({
        BookData: deleteData.data,
      });
      console.log(this.state.BookData);
    } catch (err) {
      alert(err);
    }
  };



  //// update related method to update data in api ////
  showFunction = async (index) => {
    await this.setState({
      showUpdateForm: true,
      indexNum: index,
      description: this.state.BookData[index].description,
      status: this.state.BookData[index].status,
      img: this.state.BookData[index].img,
      title: this.state.BookData[index].title,
    });
  };
  //// update opertaion method to update data in api ////
  updateFn = (e) => {
    e.preventDefault();

    let index = this.state.indexNum;
    let description = e.target.description.value;
    let status = e.target.status.value;
    let img = e.target.img.value;
    let title = e.target.title.value;

    let updateBooks = {
      description: description,
      status: status,
      img: img,
      title: title,
    };
    /// getting the data to be updated from the server ///
    // https://can-of-books-srv.herokuapp.com/books/1?EmailQuery=mamoun.alshishani@yahoo.com
    let updateUrl = `https://can-of-books-srv.herokuapp.com/books/${index}?EmailQuery=${this.props.auth0.user.email}`;
    let dataUrl = axios.put(updateUrl, updateBooks);
    this.setState({
      BookData: dataUrl.data,
    });
  };

  render() {
    const { indexNum } = this.state;

    const chevronWidth = 40;
    return (
      <div className="bestbooks-container">
        <SectionOfBestBooks />
        <button onClick={this.handleShow} className="Modal-btn">
          Add a Book!
        </button>
        <AddForm
          handleClose={this.handleClose}
          showModel={this.state.showModel}
          addnewBook={this.addnewBook}
        />
        {/* <UpdateData> </UpdateData> */}
        <UpdateForm
          updateFn={this.updateFn}
          handleClose={this.handleUpdateClose}
          showModel={this.state.showUpdateForm}
        />

        {this.state.BookData && (
          <div
            className="ItemsCarousel-ParentDiv"
            style={{ padding: `0 ${chevronWidth}px` }}
          >
            <ItemsCarousel
              className="ItemsCarousel-component"
              requestToChangeActive={this.ActiveIndexItem}
              activeItemIndex={indexNum}
              numberOfCards={2}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {this.state.BookData != null &&
                this.state.BookData.map((data, index) => {
                  return (
                    <div className="Data-Div" key={data._id}>
                      <h2 style={{ textAlign: "center" }}>
                        <b style={{ color: "crimson" }}>Book:</b> {data.title}
                        <br /> <b style={{ color: "crimson" }}>Status:</b>{" "}
                        {data.status}
                      </h2>
                      <div className="img-Div">
                        <img
                          src={data.img}
                          alt={data.title}
                          className="data-img"
                        />
                      </div>
                      <p>
                        <b style={{ color: "crimson" }}>Description:</b>{" "}
                        {data.description}
                      </p>
                      <div className="btn-container-Div">
                        <button
                          onClick={() => this.deleteTheBook(index)}
                          className="DeleteBtn"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => this.showFunction(index)}
                          className="UpdateBtn"
                        >
                         Update!
                        </button>
                      </div>
                    </div>
                  );
                })}
            </ItemsCarousel>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(BestBooks);
