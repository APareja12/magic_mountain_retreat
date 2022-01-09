import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica 
            css={`
                color: #047bf1;
            `}
            />),
        title: "Connect and learn more about nature",
        desc: "Unique experiences",
    },
    {
        icon: (<MdAirplanemodeActive 
            css={`
                color: #f3a82e;
            `}
            />),
        title: "Relaxing creative workshops",
        desc: "A beautiful getaway",
    },
    {
        icon: (<MdTimer 
            css={`
                color: #f3f2e;
            `}
        />),
        title: "Reach out",
        desc: "Access our support team 24/7",
    },
    {
        icon: (<FaMoneyCheck 
            css={`
                color: #3af576;
            `}
        />),
        title: "Budget friendly packages",
        desc: "Offering payment plans",
    },
]