import React from 'react'
import "./dataDeletion.css";

export default function DataDeletion() {
    return (
        <div className="container-sm">
            <div className="data-deletion">
                <div className="faxSimileH1">Request <span>Data deletion</span></div>
                <p>The user always has the right to request the deletion of his data. To do this you need to follow these instructions.</p>

                <hr className="myLine" />
                <div className="faxSimileH2">Send the e-mail</div>
                <p>The e-mail must be sent by entering the following parameters.</p>
                <ol className="dataDeletionList">
                    <li className="dataDeletionItems">Send the email to the following address: <a href="mailto:breadbot.itsnot.mee6@gmail.com">breadbot.itsnot.mee6@gmail.com</a></li>
                    <li className="dataDeletionItems">Enter as subject "Request to delete data" (There is no possibility to choose which data will be deleted, all data will be deleted)</li>
                    <li className="dataDeletionItems">Enter your discord ID in the email message, which can be found by activating the developer mode on discord and right clicking on your icon and clicking copy ID. In case of a server, enter the server ID, differentiating the two IDs (eg. User ID: "userId" or Server ID: "server ID")</li>

                </ol>

                <hr className="myLine" />

                <div className="faxSimileH2">Data deletion accepted</div>
                <p>We will send you a confirmation email where we will tell you that your data has been successfully deleted (this should not take more than a day)
                </p>

                <hr className="myLine" />

                <div className="faxSimileH2">Data deletion failure</div>
                <p>We will send you an email informing you that the data deletion has failed, this is because most likely you have sent the wrong or incomplete ID. (We will never reject a data deletion request if the data is correct, and we have made sure it is really you)</p>

                <hr className='myLine' />
                <div className="footer">
                    <p>Latest update: June 1 2022</p>
                    <p>Retun to <a href="/">home</a></p>
                </div>
            </div>
        </div>
    )
}
