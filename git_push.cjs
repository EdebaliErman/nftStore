const { exec } = require('child_process');

const commitMessage = process.argv[2] || 'Varsayılan açıklama';

    // Git add
exec('git add .', (error, stdout, stderr) => {
    if (error) {
        console.error(`Git add hata: ${error}`);
        return;
    }
    console.log(`Git add çıktı: ${stdout}`);

    // Git commit
    exec(`git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Git commit hata: ${error}`);
            return;
        }
        console.log(`Git commit çıktı: ${stdout}`);

        // Git push
        exec('git push', (error, stdout, stderr) => {
            if (error) {
                console.error(`Git push hata: ${error}`);
                return;
            }
            console.log(`Git push çıktı: ${stdout}`);
        });
    });
});