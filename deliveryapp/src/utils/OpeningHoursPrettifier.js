
export default function PrettifyOpeningHours(openingHours){
    const days = [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag'
    ];
    let prettifiedOpeningHours = '';
    for (let i = 0; i < days.length; i++){
        let day = days[i];
        prettifiedOpeningHours += `${day} ${openingHours[i]}`;
    }
    return prettifiedOpeningHours;
}