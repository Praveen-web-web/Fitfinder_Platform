package com.backend.common.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtil {

    private DateUtil() {
        // Private constructor to prevent instantiation
    }

    public static boolean isExpired(LocalDateTime dateTime) {
        return LocalDateTime.now().isAfter(dateTime);
    }

    public static String format(LocalDateTime dateTime) {
        return dateTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }
}
