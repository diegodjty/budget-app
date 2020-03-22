export const reviseBudget = (budget, remaining) => {
    let budgetColor;

    if ( (budget / 4) > remaining ){

        budgetColor = 'alert alert-danger';

    }else if( (budget / 2) > remaining){
        budgetColor = 'alert alert-warning';
    }else{
        budgetColor = 'alert alert-success'
    }

    return budgetColor;
}