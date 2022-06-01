import React from 'react'
import { useState } from 'react'
import "./PrivacyPolicy.css";
import { formatDistance, subDays } from 'date-fns';

export default function PrivacyPolicy() {

    function latestUpdate() {
        new Date(document.lastModified)
    }
    
    return (
        <>
            <div className="container-sm">
                <div className="privacy-policy">
                    <div className='faxSimileH1'>Privacy Policy of <span>Bred it's not mee6</span></div>
                    <p>This Website collects some Personal Data from its Users.</p>
                    <p>This document can be printed for reference by using the print command in the settings of any browser.</p>

                    <p>The use of this application (Bread it’s not mee6) in a server requires the collection of some specific user data (Message content). The Data collected includes, but is not limited to Discord user ID values. Use of the Bot is considered an agreement to the terms of this Policy.</p>


                    <hr className='myLine' />
                    <div className="faxSimileH2">Acces to Data</div>
                    <p>Access to Data is only permitted to Bot's developers, and only in the scope required for the development, testing, and implementation of features for Bot. Data is not sold, provided to, or shared with any third party, except where required by law or a Terms of Service agreement. You can view the data upon request at <a href="mailto:breadbot.itsnot.mee6@gmail.com">breadbot.itsnot.mee6@gmail.com</a></p>

                    <hr className='myLine' />
                    <div className="faxSimileH2">Storage of Data</div>
                    <p>Data is stored in a MongoDB database. The database is secured to prevent external access, however no guarantee is provided and the Bot owners assume no liability for the unintentional or malicious breach of Data. In the event of an unauthorised Data access, users will be notified through the Discord client application.</p>

                    <hr className='myLine' />
                    <div className="faxSimileH2">User Rights</div>
                    <p>At any time, you have the right to request to view the Data pertaining to your Discord account. You may submit a request through the <a href="https://discord.gg/AMs7ZCy72a">Discord Server</a>.</p>

                    <hr className='myLine' />
                    <div className="faxSimileH2">Underage Users</div>
                    <p>The use of the Bot is not permitted for minors under the age of 13, or under the age of legal consent for their country. This is in compliance with the <a href="https://discord.com/terms">Discord Terms of Service</a>. No information will be knowingly stored from an underage user. If it is found out that a user is underage we will take all necessary action to delete the stored data. (With underage we refer to children under the age of 13).</p>

                    <hr className='myLine' />
                    <div className="faxSimileH2">Questions</div>
                    <p>If you have any questions or are concerned about what data might be being stored from your account contact <a href="mailto:breadbot.itsnot.mee6@gmail.com">breadbot.itsnot.mee6@gmail.com</a>. For more information check the <a href="https://discord.com/terms">Discord Terms Of Service</a>.</p>

                    <hr className="myLine" />
                    <div className="faxSimileH2">Contact info</div>
                    <p>Email: <a href="mailto:breadbot.itsnot.mee6@gmail.com">breadbot.itsnot.mee6@gmail.com</a></p>

                    <hr className='myLine' />
                    <div className="footer">
                        <p>Latest update: May 31 2022</p>
                        <p>Retun to <a href="/">home</a></p>
                    </div>

                </div>
            </div>
        </>
    )
}