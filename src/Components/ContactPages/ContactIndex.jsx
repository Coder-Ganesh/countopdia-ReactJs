import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Contact from "./Contact";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-777-8880",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "666-777-8880",
          email: "Kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "666-777-8880",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
    };
  }

  handleAddContact = () => {
    alert("Contact Added");
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact></AddRandomContact>
            </div>
            <div className="col-4">
              <RemoveAllContact></RemoveAllContact>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
              <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
            <div className="col-8 offset-2 row">
              <FavoriteContact
                contact={this.state.contactList.filter(
                  (u) => u.isFavorite == true
                )}
              />
              </div>
            </div>
            <div className="row py-2">
            <div className="col-8 offset-2 row">
              <GeneralContact
                contact={this.state.contactList.filter(
                  (u) => u.isFavorite == false
                )}
              />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
