<?php
	$url = 'https://www.google.com/calendar/ical/pl.polish%23holiday%40group.v.calendar.google.com/public/basic.ics';
	echo file_get_contents($url);
