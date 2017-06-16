CREATE TABLE `User`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `date_joined` DATE NOT NULL,
    `notification_arn` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `Task`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `due_date` DATE NOT NULL,
    `assignee_id` INT DEFAULT NULL,
    `created_on` DATE NOT NULL,
    `updated_on` DATE NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`assignee_id`) REFERENCES `User`(`id`)
);

CREATE TABLE `Comment`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(500) NOT NULL,
    `task_id` INT NOT NULL,
    `commenter_id` INT NOT NULL,
    `created_on` DATE NOT NULL,
    `updated_on` DATE NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE,
    FOREIGN KEY(`commenter_id`) REFERENCES `User`(`id`) ON DELETE CASCADE
);
