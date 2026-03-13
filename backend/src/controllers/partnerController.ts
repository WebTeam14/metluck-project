import { Request, Response } from "express";
import { prisma } from "../prisma";
import { sendMail } from "../utils/sendMail";

export const createPartner = async (req: Request, res: Response) => {

try {

const {
companyName,
contactPerson,
email,
phone,
companyType,
services,
message
} = req.body;

await prisma.partner.create({
data:{
companyName,
contactPerson,
email,
phone,
companyType,
services,
message
}
});

await sendMail(
"New Partner Registration",
`
<h2>Partner Registration</h2>

<p><b>Company Name:</b> ${companyName}</p>
<p><b>Contact Person:</b> ${contactPerson}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Company Type:</b> ${companyType}</p>
<p><b>Services:</b> ${services}</p>
<p><b>Message:</b> ${message}</p>
`
);

res.json({ message: "Partner registration submitted" });

} catch (error) {

console.log(error);

res.status(500).json({
error:"Failed to register partner"
});

}

};