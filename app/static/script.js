document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const specific = document.getElementById('specific');
    const abacus = document.getElementById('abacus');
    const spellingbee = document.getElementById('spellingbee');
    const singmath = document.getElementById('singmath');
    const midbrain = document.getElementById('midbrain');
    const twoclasses = document.getElementById('twoclasses');
    const registrationfee = document.getElementById('registrationfee');


    const toObserve = [name, specific, abacus, spellingbee, singmath, midbrain, twoclasses, registrationfee];
    toObserve.forEach(function(element) {
        element.addEventListener('click', function() {
            updateTemplate();
        });
    })
    name.addEventListener('input', function () {
        updateTemplate();
    } )
    function updateTemplate() {
        const specificEnquiryTemplate = `
To answer your specific enquires,
<b>< Answer Questions here ></b>

        `
        

        const abacusTemplate = `
I have attached the abacus course details for your reference below,
• There are 8 levels 
• Each level - 4 months
• Weekly - one class 1 hrs 
• One level fees - ₹6000/-
• Registration - ₹1000/ - (one time payment)
• Book fees - ₹200/- one level book
• Abacus - ₹200/-

        `
        
        const spellingbeeTemplate = `
I have attached the spelling bee course details for your reference below,
• There are 4 levels 
• Each level - 4 months
• Weekly - one class 1 hrs 
• One level fees - ₹6000/-
• Registration - ₹1000/ - (one time payment)
• Book fees - ₹200/- one level book

        `

        const SingaporeMathTemplate = `
I have attached the Singapore Maths course details for your reference below,
• There are 5 levels 
• Each level - 4 months
• Weekly - one class 1 hrs 
• One level fees - ₹6000/-
• Registration - ₹1000/ - (one time payment)
• Book fees - ₹200/- one level book
• Currently 50% offer is underway. This is applicable for your first level. First level now will be ₹3000/-.

`

const MidbrainActivtationTemplate = `
I have attached the Midbrain Activation course details for your reference below,
• There are 15 classes
• First 4 days - half day class
• Remaining days - 2 hours/day 
• all 15 classes at a stretch 
• Course fees - ₹15000/-
• Currently 50% offer is underway. Fees is now only ₹7500/-.

        `
        
        const twoClassesAWeekClarification = `
You can optionally choose to have two classes a week and if you do, level fees alone will be doubled
        `
        
        const registrationFeeClarification = `
If you enroll in multiple courses, registration fee will be payed only once and not separately for each course
        `
        
        const template = `
Hello ${name.value},
Greetings from Thej Academy, Pleased to receive your enquiry 
${specific.checked ? specificEnquiryTemplate : ''}${abacus.checked ? abacusTemplate : ''}${spellingbee.checked ? spellingbeeTemplate : ''}${singmath.checked ? SingaporeMathTemplate : ''}${midbrain.checked ? MidbrainActivtationTemplate : ''}${twoclasses.checked ? twoClassesAWeekClarification : ''}${registrationfee.checked ? registrationFeeClarification : ''}

A little about us
• We have 22 Years of experience spreading the joy of abacus
• We conduct competitions at a national level 
• We also provide ISO certificates

Feel free to ask if you have any further questions, 
        
Warm Regards,
Thej Academy
        `
        const output = document.getElementById('output');
        output.innerHTML = template;
    }

    const copyBtn = document.getElementById('copy');
    function copyToClipboard(text) {
        var data = [new ClipboardItem({ "text/plain": new Blob([text], { type: "text/plain" }) })];
        navigator.clipboard.write(data)
        .then(function() {
                console.log("Copied to clipboard successfully!");
                copyBtn.innerHTML = "Copied!";
                setTimeout(function() {
                    copyBtn.innerHTML = "Copy";
                }, 2000);
            }, function() {
                console.error("Unable to write to clipboard. :-(");
                copyBtn.innerHTML = "Unable to Copy, Try again";
                setTimeout(function() {
                    copyBtn.innerHTML = "Copy";
                }, 2000);
            });
    }
    
    copyBtn.addEventListener('click', function() {
        copyToClipboard(output.innerHTML);
    });
})


