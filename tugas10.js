var bilangan = [0]

for(i=1; i<=10;i++){
	bilangan[i] = bilangan[i-1] + i;
	console.log(bilangan[i])
}