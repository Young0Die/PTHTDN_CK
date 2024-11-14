import "./ProfilePage.css";
import { User, GenderNeuter, Phone, AddressBook, CalendarBlank, Envelope} from "@phosphor-icons/react";

const ProfilePage = (props) => {
    const username = props.username;
    const gender = props.gender;
    const numberPhone = props.numberPhone;
    const address = props.address;
    const DOB = props.DOB;
    const email = props.email;
    return(
        <div className="profile_container">
            <div className="name_page_button_edit">
                
                <button className="edit_button"> <div className="text_button_edit">Edit</div></button>
                <h1>PROFILE</h1>    
            </div>
            <div className="profile_info">
                <div className="userName"><User size={28} /> {username}</div>
                <div className="userName"><GenderNeuter size={28} /> {gender}</div>
                <div className="userName"><Phone size={28} />{numberPhone}</div>
                <div className="userName"><AddressBook size={28} />{address}</div>
                <div className="userName"><CalendarBlank size={28} />{DOB}</div>
                <div className="userName"><Envelope size={28} />{email}</div>
            </div>
        </div>
    );
};
export default ProfilePage;
