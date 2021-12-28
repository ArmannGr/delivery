
export default  function PrettifyAddress(address){
    return `${address.street}. ${address.houseNumber}, ${address.city}, ${address.postalCode}, ${address.state}`;
}