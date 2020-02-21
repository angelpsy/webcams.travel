interface ImageSizes {
    width: number;
    height: number;
}

export interface WebCamsItem {
    id: string;
    status: string;
    title: string;
    image: {
        current: {
            /**
             * url
             */
            icon: string;
            /**
             * url
             */
            thumbnail: string;
            /**
             * url
             */
            preview: string;
            /**
             * url
             */
            toenail: string;
        };
        sizes: {
            icon: ImageSizes;
            thumbnail: ImageSizes;
            preview: ImageSizes;
            toenail: ImageSizes;
        };
        daylight: {
            /**
             * url
             */
            icon: string;
            /**
             * url
             */
            thumbnail: string;
            /**
             * url
             */
            preview: string;
            /**
             * url
             */
            toenail: string;
        };
        update: number;
    };
    location: {
        city: string;
        region: string;
        region_code: string;
        country: string;
        country_code: string;
        continent: string;
        continent_code: string;
        latitude: number;
        longitude: number;
        timezone: string;
        /**
         * url
         */
        wikipedia: string;
    };
}
