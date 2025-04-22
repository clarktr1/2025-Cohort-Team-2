export interface LeaseActionsProps {
    lease_id: number;
    tenant_name: string;
    tenant_signature: string | null;
    landlord_name: string;
    date_created: Date;
    date_signed: Date | null;
    date_end: Date;
}

const LeaseDisplay: React.FC<LeaseActionsProps> = ({ lease_id, tenant_name, tenant_signature, landlord_name, date_created, date_signed, date_end }) => {

    return (
        <div className="bg-white h-full rounded overflow-auto p-2 mb-4">
            {/* <span className='text-2xl bold'>big words</span> */}
            <p className="text-black">
                <span className='text-xl font-bold'>RESIDENTIAL LEASE AGREEMENT</span>
                <br></br>
                <span>Lease ID: {lease_id}</span>
                <br></br>
                THIS RESIDENTIAL LEASE AGREEMENT (the "Agreement") is made and entered into as of
                __{date_signed?.toLocaleDateString()}__, by and between {landlord_name} ("Landlord") and {tenant_name}
                ("Tenant").<br></br>
                <span className='text-lg font-bold'>1. PREMISES </span> Landlord leases to Tenant the premises located at 
                <span id="lease-room-num"></span> (the
                "Premises")<br></br>
                <span className='text-lg font-bold'>2. TERM </span> The lease term shall commence on {date_created.toLocaleDateString()} and 
                shall end on {date_end.toLocaleDateString()}.
                <br></br>
                <span className='text-lg font-bold'>3. RENT </span>
                Tenant shall pay Landlord monthly rent in the amount of $1500, due on the 1st
                of each month. A late fee of $50 shall apply for any rent received after the 5th of the month.
                <br></br>
                <span className='text-lg font-bold'>4. SECURITY DEPOSIT </span>
                Tenant shall provide a security deposit of $1500, which shall be
                refundable per the terms herein.
                <br></br>
                <span className='text-lg font-bold'>5. USE OF PREMISES </span>
                Tenant shall use the Premises solely for residential purposes and shall
                comply with all applicable laws and ordinances.
                <br></br>
                <span className='text-lg font-bold'>6. MAINTENANCE AND REPAIRS </span>
                Tenant shall be responsible for keeping the Premises in a
                clean and habitable condition. Tenant agrees to immediately report any issues requiring
                maintenance.
                <br></br>
                <span className='text-lg font-bold'>7. PET POLICY </span>
                Pets are permitted only with prior written approval of Landlord. Approved pets
                must participate in the annual "Landlord's Choice Pageant,
                " where they will be judged based on demeanor, obedience, and aesthetic appeal. Pets failing to meet the minimum pageant
                standards may be subject to immediate lease termination.
                <br></br>
                <span className='text-lg font-bold'>8. GUEST POLICY </span>
                Tenant may have guests stay for a maximum of 14 days per year. Any guest
                who stays longer shall be considered an additional Tenant and must submit to a background
                check, credit screening, and a ritualistic oath of fealty to the Landlord.
                <br></br>
                <span className='text-lg font-bold'>9. REQUIRED PARTICIPATION IN COMMUNITY ACTIVITIES </span>
                Tenant agrees to participate in
                monthly community bonding activities, including but not limited to synchronized morning chants,
                mandatory potlucks where Landlord gets first choice of food, and the annual "Landlord
                Appreciation Gala." Failure to attend shall result in a $75 penalty per missed event.
                <br></br>
                <span className='text-lg font-bold'>10. LANDLORD'S RIGHT OF ENTRY </span>
                Landlord may enter the Premises with 24 hours' notice
                for inspections, repairs, or "general vibes assessment.
                " Landlord may also conduct
                unannounced midnight visits on full moons to ensure Tenant is in compliance with lease
                expectations.
                <br></br>
                <span className='text-lg font-bold'>11. TEMPERATURE CONTROL </span>
                Tenant shall maintain the interior temperature of the Premises
                between 63 and 67 degrees Fahrenheit at all times. Any deviation must be approved via written
                request, which shall be considered but never granted.
                <br></br>
                <span className='text-lg font-bold'>12. SOUND REGULATIONS </span>
                Tenant agrees to maintain noise levels at an acceptable level. The
                only exceptions to this rule are: a) Between 2 AM and 3 AM every Tuesday, when the Landlord
                may conduct impromptu recorder concerts. b) The designated "Primal Screaming Hour" every
                second Thursday of the month.
                <br></br>
                <span className='text-lg font-bold'>13. DECOR AND FURNISHINGS </span>
                Tenant may decorate the unit to their liking, provided all
                changes align with the Landlord’s personal aesthetic preferences. A pre-approved list of
                acceptable artwork and furniture styles shall be provided upon move-in.
                <br></br>
                <span className='text-lg font-bold'>14. MISCELLANEOUS PROVISIONS </span>
                a) Tenant must acknowledge Landlord as "Supreme
                Property Steward" when addressing them in writing. b) Mirrors may not be placed facing
                windows, as per the Landlord's deeply held personal beliefs. c) Tenant may not consume soup
                after 9 PM for reasons that need not be explained.
                IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written
                above.
                LANDLORD: _____{landlord_name}______
                TENANT: _____{tenant_signature}______
            </p>
            <br></br>
            <span>Date Signed: _____{date_signed?.toLocaleDateString()}____</span>
        </div>
    );
};

export default LeaseDisplay;
