import React, {useId} from 'react'

function InputBox({
    label,//bcoz we want to know ki user from pass kar rha h ya fir to;
    amount,//to display amount
    onAmountChange,//if we directly change amount 
    onCurrencyChange,//if we change currency
    currencyOptions = [],//empty array m leliye just because error na de aur shi input user se isi array m store kare
    selectCurrency = "usd",//to select currency
    amountDisable = false,//ye aisehi liye h hata v skte h 
    currencyDisable = false,//ye v
    className = "",//->it is user css if in case user wants to change the css thats why in line no 17 we have taken css in{``}
}) {
   const amountInputId = useId()//km use hota h documentation padh lo

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}//&& lga diye to check first if onAmountChange is available or not
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}> 
                            {currency}
                            </option>
                        ))}
                
                </select> 
            </div>
        </div>
    );
}

export default InputBox;