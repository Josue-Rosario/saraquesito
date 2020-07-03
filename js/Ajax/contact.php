<?php
if (isset($_Post['name'], $_Post['email'], $_Post['subject'], $_Post['message'])) {
    print_r($_Post);
}

<?php
    $existingNames = array("Daniel", "Dennis", "Danny", "Jane");

    if (isset($_POST['contact'])) {
        $name = $_POST['contact'];

    if (!empty($name) {
        foreach ($existingNames as $existingName) {
            if (strpos($existingNAme, $name) !== false) {
                echo $existingName;
                echo "<br>";
               }
            }
        }  
    }
?>