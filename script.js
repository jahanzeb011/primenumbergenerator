function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }

  function updatePrimeCount(count) {
    const primeCountElement = document.getElementById("primeCount");
    primeCountElement.textContent = `Prime Count: ${count}`;
  }

  function updateTimer() {
    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Time Taken: ${timeTaken} ms`;
  }
  
  function findPrimes() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const resultDiv = document.getElementById("result");
    const primenumbers = document.getElementById("result");
  
    if (isNaN(start) || isNaN(end)) {
      resultDiv.innerHTML = "Please enter valid numbers for start and end.";
      updatePrimeCount(0);
      updateTimer();
      return;
    }
  
    if (start < 0 || end > 10000000) {
      resultDiv.innerHTML = "Please enter a range between 0 and 10000000.";
      updatePrimeCount(0);
      updateTimer(); 
      return;
    }
  
    if (start >= end) {
      resultDiv.innerHTML = "End value must be greater than start value.";
      updatePrimeCount(0);
      updateTimer();
      return;
    }
  
    let primes = [];
  
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    startTime = new Date().getTime(); // Record the start time
  
    if (primes.length > 0) {
      resultDiv.innerHTML = `Prime numbers between ${start} and ${end}: `;
      primenumbers.innerHTML = `${primes.join(", ")}`
      updatePrimeCount(primes.length);
      updateTimer();
    } else {
      resultDiv.innerHTML = `No prime numbers found between ${start} and ${end}.`;
      updatePrimeCount(0);
      updateTimer(); 
    }
  }
  function savePrimes() {
    
    const primes = document.getElementById("result").innerText;
    if( primes !=='' ){
      const primesArray = primes.split(", ");

      let csvContent = "Prime Numbers\n";
      for (const prime of primesArray) {
        csvContent += prime + "\n";
      }
    
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
    
      const a = document.createElement("a");
      a.href = url;
      a.download = "prime_numbers.csv";
      a.click();
    
      // Clean up the URL object to free memory
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 0); }
  }

  function goToIndexPage() {
    window.location.href = "index.html";
  }