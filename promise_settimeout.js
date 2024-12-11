function delay(ms) {
  return new Promise((fulfill, reject) => 
    ms < 0
      ? reject(new Error('delaytime cant be negative number'))
      : setTimeout(fulfill, ms)
  );
}

( async function IIFE() {
    try {
      console.log('wait a 3sec');
      await delay(3000);
      console.log('ok');
      
      await delay(-1000);
    } catch (error) {
      console.error(error);
    }}
)();

// IIFE();
